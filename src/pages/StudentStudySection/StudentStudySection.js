import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStudentStudySections, deleteStudentStudySection } from '../../services/studentStudySectionService'
import Toast from '../../components/Common/Toast'
import StudentCell from '../../components/Common/StudentGetName'
import SectionCell from '../../components/Common/SectionGetCodeAndName'

function SectionClass(){
    const [studentStudySections, setStudentStudySections] = useState([])
    const [result, setResult] = useState(null)

    // Phan trang
    const [total, setTotal] = useState(0)
    const [current, setCurrent] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(0)


    useEffect(() => {
        async function fetchData(){
            const data = await getStudentStudySections()
            setStudentStudySections(data)
        }
        fetchData()
    }, [])

    const handleDelete = (id) => {
        async function DeleteData(){
            const result = await deleteStudentStudySection(id)
            if(result === true){
                setResult(result)
                setStudentStudySections(prev => 
                    prev.filter(studentStudySection => studentStudySection.id_sv_hoc_hp !== id)
                )
            }
        }
        DeleteData()
    }

    return (
        <div className="view-data">
            <div className="view__title">
                <h2>Quản Lý Sinh Viên Học Học Phần</h2>
                <Link to="/studentStudySection/add">
                    <button>Thêm Mới</button>
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
                            <th>MSSV</th>
                            <th>Sinh Viên</th>
                            <th>MSHP</th>
                            <th>Tên Học Phần</th>
                            <th>Ngày Đăng Ký</th>
                            <th>Thu Phí</th>
                            <th>Điểm Giữa Kỳ</th>
                            <th>Điểm Cuối Kỳ</th>
                            <th>Điểm Tổng Kết</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {sectionClasses.map((sectionClass, index) => (
                        <tr key={index}>
                            <td>{sectionClass.ms_lop_hoc_phan}</td>
                            <td><SubjectCell Id={sectionClass.id_mon_hoc} /></td>
                            <td><TeacherCell teacherId={sectionClass.id_giang_vien} /></td>
                            <td><RoomCell Id={sectionClass.id_phong} /></td>
                            <td><SemesterCell Id={sectionClass.id_hoc_ky} /></td>
                            <td>{sectionClass.tong_so_tiet}</td>
                            <td>{sectionClass.tong_so_tiet_th}</td>
                            <td>{sectionClass.trang_thai}</td>
                            <td>{sectionClass.hoc_phi}</td>
                            <td>
                                <i class="fa-solid fa-trash"
                                    onClick={() => handleDelete(sectionClass.id_lop_hoc_phan)}
                                ></i>
                                <Link to={`/sectionClass/update/${sectionClass.id_lop_hoc_phan}`}>
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
                    Show <span>1</span> to <span>57</span> of <span>{sectionClasses.length}</span> entries
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

export default SectionClass