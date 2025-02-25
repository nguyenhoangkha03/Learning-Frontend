import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getManagers, deleteManager } from '../../services/managerService'
import { format, parseISO } from 'date-fns'
import Toast from '../../components/Common/Toast'

function Manager(){
    const [managers, setManagers] = useState([])
    const [result, setResult] = useState(null)

    // Phan trang
    const [total, setTotal] = useState(0)
    const [current, setCurrent] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(0)


    useEffect(() => {
        async function fetchData(){
            const data = await getManagers()
            console.log(data); 
            setManagers(data)
        }
        fetchData()
    }, [])

    const handleDelete = (id) => {
        async function DeleteData(){
            const result = await deleteManager(id)
            if(result === true){
                setResult(result)
                setManagers(prev => 
                    prev.filter(manager => manager.id_manager !== id)
                )
            }
        }
        DeleteData()
    }

    return (
        <div className="view-data">
            <div className="view__title">
                <h2>Manager Management</h2>
                <Link to="/manager/add">
                    <button>Add New</button>
                </Link>
            </div>
            <div className="view__top">
                <div className="view__top__entries">
                    Show
                    <select>
                        <option value="10" key="10">10</option>
                        <option value="25" key="25">25</option>
                        <option value="50" key="50">50</option>
                        <option value="100" key="100">100</option>
                    </select>
                    entries
                </div>
                <div className="view__top__search">
                    Search:
                    <input type="text" />
                </div>
            </div>
            <div className="view__body">
                <table>
                    <thead>
                        <tr>
                            <th>MSM</th>
                            <th>Họ Tên</th>
                            <th>Ngày Sinh</th>
                            <th>Giới Tính</th>
                            <th>Địa Chỉ</th>
                            <th>Email</th>
                            <th>SĐT</th>
                            <th>Hình Ảnh</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {managers.map((manager, index) => (
                        <tr key={index}>
                            <td>{manager.msm}</td>
                            <td>{manager.ho_ten}</td>
                            <td>{manager.ngay_sinh
                                    ? format(parseISO(manager.ngay_sinh), 'dd/MM/yyyy')
                                    :
                                    ''
                                }</td>
                            <td>{manager.gioi_tinh === 1 ? 'Nam' : 'Nữ'}</td>
                            <td>{manager.dia_chi}</td>
                            <td>{manager.email}</td>
                            <td>{manager.sdt}</td>
                            <td>
                                
                                {manager.image ? (
                                    <img src={manager.image} alt="" />
                                ) : (
                                    'Không có Ảnh'
                                )}
                            </td>
                            <td>
                                <i class="fa-solid fa-trash"
                                    onClick={() => handleDelete(manager.id_manager)}
                                ></i>
                                <Link to={`/manager/update/${manager.id_manager}`}>
                                    <i class="fa-solid fa-pen"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="view__bottom">
                <div className="view__bottom__total">
                    Show <span>1</span> to <span>57</span> of <span>{managers.length}</span> entries
                </div>
                <div className="view__bottom__pagination">
                    <button disabled>Previous</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>Next</button>
                </div>
            </div>
            
            {result === true ? <Toast 
                                    type="success" 
                                    message="Delete successfully"  
                                    onClose={() => setResult(null)}/> : 
                                '' }
            {result === false ? <Toast 
                                    type="error" 
                                    message="Delete error"  
                                    onClose={() => setResult(null)} /> : 
                                '' }
        </div>
    )
}

export default Manager