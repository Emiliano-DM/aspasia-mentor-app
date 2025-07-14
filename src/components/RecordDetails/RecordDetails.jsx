import React from "react";
import { useContext } from "react";
import { resultContext } from "../../provider/resultProvider.jsx";
import "./RecordDetails.css";

function RecordDetails({ data, isVisible }) {
  //filter and obtain an object. get other parameter on screen
  const { mentorId, teamId, id } = data;
  const { results } = useContext(resultContext);

  let tiesTeamsIds = [];
  console.log();
  const ties = results.ties.totalScoreTies.map((item) => {
    if (item.mentorId === mentorId) {
      tiesTeamsIds.push(...item.teams);
      return item;
    }
  })[0];

  const mentorTeamVM = results.votingMatrix[id]
    .filter((item) => {
      return tiesTeamsIds.length > 0
        ? tiesTeamsIds.includes(item.teamId)
        : item.teamId === teamId;
    })
    .sort((a, b) => b.adequacyScore - a.adequacyScore);

  return !isVisible ? (
    <div className="mg-b-10"></div>
  ) : (
    <div id="record-details">
      {mentorTeamVM.length > 0 && (
        <div>
          {mentorTeamVM.map((team, index) => {
            return (
              <div key={index} id="record-details-container">
                <h3>
                  Detalles para equipo {teamId.slice(-1)[0]} y mentor {id + 1}
                </h3>
                <p>
                  Ptos mentor: {team.voteReceived} | Ptos equipo:{" "}
                  {team.voteEmitted}
                </p>
                <p>Total: {team.totalScore}</p>
                <p>Puntos de adecuacìon: {team.adequacyScore}</p>
              </div>
            );
          })}
        </div>
      )}
      {ties && ties.adequacyScore && (
        <p>Tie adequacyScore. la decisión final es manual</p>
      )}
      {}
    </div>
  );
}

export default RecordDetails;
