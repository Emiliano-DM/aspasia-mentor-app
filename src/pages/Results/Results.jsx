import React, { useEffect, useContext, useState } from "react";
import ResultRecord from "../../components/ResultRecord/ResultRecord.jsx";
import { fetchData } from "../../services/api.js"; // Adjust the import path as necessary
import { resultContext } from "../../provider/resultProvider.jsx";
import RecordDetails from "../../components/RecordDetails/RecordDetails.jsx";
import "./Results.css";

function Results() {
  const [teams, setTeams] = useState();
  const [mentors, setMentors] = useState();
  const { results, setResults } = useContext(resultContext);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    try {
      const [teamsData, mentorsData, resultsData] = await Promise.all([
        fetchData("equipos"),
        fetchData("mentores"),
        fetchData("matching"),
      ]);
      setTeams(teamsData);
      setMentors(mentorsData);
      setResults(resultsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div id="results">
      <h1>Resultados de la votacìon</h1>
      {teams?.map((team, index) => {
        const convertedId = "team" + (index + 1);
        return (
          <div key={team.id}>
            <ResultRecord
              data={{
                teams: teams,
                mentors: mentors,
                mentorId:
                  Number(
                    results.matchings.matching1[convertedId].slice(-1)[0]
                  ) - 1,
                teamId: index,
              }}
            ></ResultRecord>
          </div>
        );
      })}
    </div>
  );
}

export default Results;
