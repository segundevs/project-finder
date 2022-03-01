import axios from "axios";

const Details = ({ data }) => {
  return (
    <>
      <div>Details for</div>
      {console.log(data)}
    </>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params);

  const res = await axios.get(
    `http://localhost:3000/api/projects/${params.id}`
  );

  return {
    props: {
      data: res.data.project,
    },
  };
}
