import { useRouter } from "next/router";

const Goal = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;

  return <p>Goal: {id}</p>;
};

export default Goal;
