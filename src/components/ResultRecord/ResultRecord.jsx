import "./ResultRecord.css"; // Assuming you have a CSS file for styling

function ResultRecord({ data }) {
  const { teams, mentors, teamId, mentorId } = data;

  console.log(teams, mentors, teamId, mentorId);

  // voglio l'indice del valore della lista mentores che corrisponde a l'id del mentore.
  // per ogni team, voglio l'id del mentore che è stato scelto per quel team.
  /* per ogni team -> indice (+1) del valore di array mentores di ogni team 
    per ogni in
  */

  const mentorOption = teams.reduce((acc, team) => {
    team.mentores.forEach((mentor, index) => {
      if (mentor === mentors[mentorId].id) {
        acc.push(index + 1);
      }
    });
    return acc;
  }, []);

  const teamOption = mentors.reduce((acc, mentor) => {
    mentor.equipos.forEach((team, index) => {
      if (team === teams[teamId].id) {
        acc.push(index + 1);
      }
    });
    return acc;
  }, []);

  console.log(mentorOption, teamOption);

  return (
    <div id="result-record-container">
      <div className="mentor-container">
        <div>
          <p className="mentor-name">{mentors[mentorId].nombre}</p>
          <p className="mentor-company">{mentors[mentorId].empresa}</p>
          <p className="option-text">Fue la opcìon ...</p>

          <div className="mentor-options">
            {mentorOption.map((option, index) => {
              return (
                <p key={index}>
                  {option} de {teams[index].nombre}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="group-container">
        <div>
          <p className="team-name">{teams[teamId].nombre}</p>
          <p className="option-text">Fue la opcìon ...</p>
          <div className="team-options">
            {teamOption.map((option, index) => {
              return (
                <p key={index}>
                  {option} de {mentors[index].nombre}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultRecord;
