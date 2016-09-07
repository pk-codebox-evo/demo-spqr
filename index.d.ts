import {binding, GeoPoint} from "baqend";

declare module "baqend" {

  interface baqend {
    Talk: binding.EntityFactory<model.Talk>;
    Question: binding.EntityFactory<model.Question>;
  }

  namespace model {
    interface User extends binding.Entity {
      username: string;
      inactive: boolean;
    }

    interface Talk extends binding.Entity {
      title: string;
      creator: User;
      created: Date;
    }

    interface Question extends binding.Entity {
      question: string;
      questioner: User;
      state: string;
      talk: Talk;
      voters: Set<string>;
      creator: string;
      votes: number;
      date: Date;
    }

    interface Role extends binding.Entity {
      name: string;
      users: Set<User>;
    }

    interface Device extends binding.Entity {
      deviceOs: string;
    }

  }
}