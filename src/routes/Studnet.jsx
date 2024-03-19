import { useState } from "react";
import StudentTable from "../components/student/StudentTable";
import { useQuery } from "@tanstack/react-query";

const Studnet = () => {
  // method 2 react query
  // pagination
  // first fetch skipt 0 to get the fist 5 // page0
  // next update skip 5 to get the second 5 // page1
  // next update skip 10 to get the third 5 // page2
  const [page, setPage] = useState(0);
  console.log(page);

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["student", page],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users?limit=5&skip=${page * 5}&`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
  });

  console.log(data?.total);

  return (
    <p className="w-full">
      {isLoading && <p>loading</p>}
      {isError && <p>erorr</p>}
      {isSuccess && (
        <div className=" flex flex-col gap-4 items-center">
          <StudentTable students={data?.users} />
          <div className="  flex gap-4">
            <button
              disabled={page == 0}
              onClick={() => {
                if (page == 0) return;
                setPage(page - 1);
              }}
              className=" bg-blue-400"
            >
              previous
            </button>
            <button
              disabled={page == data.total / 5}
              onClick={() => {
                if (page == data.total / 5) return;
                setPage(page + 1);
              }}
              className=" bg-blue-400"
            >
              next
            </button>
          </div>
        </div>
      )}
    </p>
  );
};

export default Studnet;
