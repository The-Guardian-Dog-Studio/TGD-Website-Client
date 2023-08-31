import team from "@/database/team.json";
import { Collaborator } from "@/domain/protocols";

interface DataWithTitle<T> {
  title: string;
  data: T;
}

interface TeamData extends DataWithTitle<Collaborator[]> {}

const makeTeamData = (): TeamData => {
  return {
    title: team.title,
    data: team.content,
  };
};

export { makeTeamData };
