import React from 'react';
import PropTypes from 'prop-types';
import { HiTrash } from 'react-icons/hi';
import { BiArchiveOut, BiArchiveIn } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ActionButton = ({id, archived, onDelete, onArchive, onUnarchived}) => {
    const navigate = useNavigate();

    return (
        <div className='action__btn'>
            <button 
                className='btn delete' 
                onClick={() => {
                    Swal.fire({
                        title: 'Yakin untuk menghapus?',
                        text: 'Kamu akan menghapus catatan ini!',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ya, Hapus saja!',
                        cancelButtonText: 'Batal',
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                        'Terhapus!',
                        'Catatan berhasil untuk dihapus',
                        'success'
                        )
                        onDelete(id);
                        navigate('/')
                        }
                    })
                }}
            >
                <HiTrash/>
            </button>
            {archived === false 
                ? <button 
                    className='btn archieve'
                    onClick={() => {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        
                        Toast.fire({
                        icon: 'success',
                        title: 'Berhasil mengarsipkan catatan'
                        })
                        onArchive(id);
                        navigate('/')
                    }}
                >
                    <BiArchiveIn/>
                </button>
                : <button 
                    className='btn archieve'
                    onClick={() => {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        
                        Toast.fire({
                        icon: 'success',
                        title: 'Berhasil mengembalikan catatan'
                        })
                        onUnarchived(id);
                        navigate('/archive')
                    }}
                >
                    <BiArchiveOut/>
                </button>
            }  
        </div>
    )
}

ActionButton.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchived: PropTypes.func.isRequired,
}

export default ActionButton;
