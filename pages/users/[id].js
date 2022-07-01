export default (props) => {
  return (
    <>
      <h1>Users {props.id} page</h1>
    </>
  );
};

export function getServerSideProps({ req, res, query }) {
  const { id } = query;
  return {
    props: {
      id,
    },
  };
}
