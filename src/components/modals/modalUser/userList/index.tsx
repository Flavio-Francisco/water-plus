import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import UserForm from "@/components/modals/modalUser/editFrom"; // Assumindo que você já tenha criado o componente UserForm
import { fakeListUser } from '@/utils/models/Data'; // Importa a lista de usuários fictícia
import { UserModel } from "@/utils/models/userModel";
import "./styles.css"

const UserList: React.FC = () => {
    const [showList, setShowList] = useState(false); // Estado para controlar a exibição da lista de usuários
    const [selectedUser, setSelectedUser] = useState<UserModel>(); // Estado para armazenar o usuário selecionado
    const [select, setSelect] = useState(true);
    const handleShowList = () => {
        setShowList(true); // Quando o botão é clicado, mostra a lista de usuários
    };

    const handleSelectUser = (user: UserModel) => {

        setSelectedUser(user); // Quando um usuário é selecionado, armazena o usuário selecionado no estado
        setSelect(!select)
    };


    return (
        <div style={{ width: '100%', }}>
            {select === true ?
                <button className='button' onClick={handleShowList}>Mostrar Lista de Usuários</button>
                :
                null
            }

            <div className='conteinerList'>
                {/* Renderiza a lista de usuários apenas se o estado showList for true */}
                {showList && (
                    <div>
                        <h5 className='h5'>Lista de Usuários</h5>
                        <div style={{ maxHeight: '400px', maxWidth: '500px', overflowY: 'auto' }} >

                            <ListGroup style={{ width: '450px', }}>
                                {fakeListUser.map((user, index) => (
                                    <ListGroup.Item key={index} action onClick={() => handleSelectUser(user)} >
                                        {user.user.name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </div>
                )}
                {/* Renderiza o formulário de edição do usuário apenas se um usuário estiver selecionado */}
                {selectedUser && (
                    <div className='form'>
                        <h5 className='h5'>Editar Usuário</h5>
                        <UserForm initialValues={selectedUser} /> {/* Passa o usuário selecionado como initialValues para o formulário de edição */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserList;
