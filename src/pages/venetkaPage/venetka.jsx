import { useEffect, useState } from 'react';
import styles from './venetka.module.scss';
import { getUserProfile, handleCreateAddNewUser } from './model';

function VenetkaPage() {
  const [disSect2, setDisSect2] = useState('none');
  const [groupData, setGroupData] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://lizaloxyshka.pythonanywhere.com/groups/detail/2/');
        if (!res.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await res.json();
        setGroupData(data);
        // console.log(data);
      } catch (error) {
        console.error('Ошибка:', error.message);
      }
    }
    fetchData();
  }, []);

  const handleItemClick = async (member) => {
    if (selectedMember && selectedMember.id === member.id) {
      setSelectedMember(null); // Если кликнули на уже открытого студента, то закрываем его блок
      setDisSect2('none'); // Скрываем блок
    } else {
      const userProfile = await getUserProfile(member.id);
      setSelectedMember(userProfile);
      setDisSect2('block');
    }
  };
  const handleCloseDetail = () => {
    setSelectedMember(null);
    setDisSect2('none');
  };
  useEffect(() => {
    handleCreateAddNewUser();
  }, []);
  console.log(groupData);

  return (
    <main>
      <section className={styles.section1}>
        <h1>{groupData && groupData.group_name}</h1>
        <div>
          <p>Описание группы: {groupData && groupData.group_description}</p>
          <p>Тип группы: {groupData && groupData.group_type}</p>
          <p>Год: {groupData && groupData.group_year}</p>
          <p>
            Ссылка на группу:{' '}
            <a href={groupData && groupData.group_url}>{groupData && groupData.group_url}</a>
          </p>
          <p>Владелец группы: {groupData && groupData.group_owner}</p>
          {/* <button onClick={handleCreateAddNewUser}>добавить пользователей +</button> */}
        </div>
        <div className={styles.students_block}>
          {groupData &&
            groupData.group_member.map((member, index) => (
              <div key={index} onClick={() => handleItemClick(member)}>
                <img
                  src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4401.jpg?w=1380"
                  alt=""
                />
                <blockquote>
                  <h2>{member.name}</h2>
                  <p>{member.quote}</p>
                </blockquote>
              </div>
            ))}
        </div>
      </section>
      <section className={styles.section2} style={{ display: disSect2 }}>
        {selectedMember && Object.keys(selectedMember).length > 0 ? (
          <div>
            <button className={styles.close_button} onClick={handleCloseDetail}>
              ✖
            </button>
            <blockquote>
              <img
                style={{ width: 300, height: 300 }}
                src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4401.jpg?w=1380"
                alt=""
              />
            </blockquote>
            <blockquote>
              <h1>Студент №{selectedMember?.id}</h1>
              <h2>Имя: {selectedMember?.name}</h2>
              <h2>Работа: {selectedMember?.employed ? 'имеется' : 'отсутствует'}</h2>
              <h2>Ссылка на LinkedIn: {selectedMember?.social_network}</h2>
              <h2>
                <a href={selectedMember.linkedIn}>{selectedMember.linkedIn}</a>
              </h2>
            </blockquote>
          </div>
        ) : (
          'loading...'
        )}
      </section>
    </main>
  );
}

export default VenetkaPage;
