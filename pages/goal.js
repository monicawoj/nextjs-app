import { useRouter } from "next/router";
import Head from "../components/Head";

const Goal = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;

  const meta = {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  };

  return (
    <div>
      <Head title={`Goal ${id}`} meta={meta} />
      <p>Goal: {id}</p>
    </div>
  );
};

export default Goal;
