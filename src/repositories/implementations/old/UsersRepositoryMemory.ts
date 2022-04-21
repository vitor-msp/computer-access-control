// import { User } from "../../model/entities/User";
// import { IUsersRepository } from "../IUsersRepository";

// class UsersRepositoryMemory implements IUsersRepository {
//   private users: User[] = [];

//   async findById(id: string): Promise<User | undefined> {
//     return this.users.find((u) => u.getId() === id);
//   }

//   async add(user: User): Promise<void> {
//     this.users.push(user);
//   }

//   async update(user: User): Promise<void> {
//     const userIndex = this.users.findIndex((u) => u.getId() === user.getId());
//     this.users[userIndex] = user;
//   }
// }

// export const usersRepositoryMemory: UsersRepositoryMemory =
//   new UsersRepositoryMemory();
