import axios from "axios";

//helper page to operate with db
// DO NOT USE BEFORE FULL CONFIDENCE ABOUT WHAT I'M GONNA DO
// TODO: only for GOD MODE!!!

export default () => {
  const rolesAdd = async () => {
    const res = await axios.post("/api/db", {
      command: "Add roles",
    });
    alert(res.data.message);
  };

  const stagesAdd = async()=>{
    const res = await axios.post('/api/db', {
        command: 'Add stages'
    })
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <button onClick={rolesAdd}>Roles Add</button>
        <button onClick={stagesAdd}>Stages Add</button>
      </div>
    </>
  );
};
