import { memo } from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import StudentCellMSSV from '../../components/Common/StudentGetMSSV'
import StudentCellName from '../../components/Common/StudentGetName'

function TableAccountStudent({ accountStudents, handleDelete, students }){

    const mssv = (id_sinh_vien) => {
        return students.find(student => student.id_sinh_vien === id_sinh_vien)?.mssv || ''
    }

    const name = (id_sinh_vien) => {
        return students.find(student => student.id_sinh_vien === id_sinh_vien)?.ho_ten || ''
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>MSSV</th> 
                    <th>Tên Sinh Viên</th>
                    <th>Username</th>
                    <th>Vai Trò</th>
                    <th>Create At</th>
                    <th>Trạng Thái</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {accountStudents.map((account, index) => (
                <tr key={index}>
                    <td>{mssv(account.id_sinh_vien)}</td>
                    <td>{name(account.id_sinh_vien)}</td>
                    <td>{account.username}</td>
                    <td>{account.vai_tro}</td>
                    <td>{format(new Date(account.create_at), "dd/MM/yyyy HH:mm:ss")}</td>
                    <td>{account.trang_thai}</td>
                    <td>
                        <i class="fa-solid fa-trash"
                            onClick={() => handleDelete(account.id_tai_khoan)}
                        ></i>
                        <Link to={`/account/update/${account.id_tai_khoan}`}>
                            <i class="fa-solid fa-pen"></i>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default memo(TableAccountStudent)