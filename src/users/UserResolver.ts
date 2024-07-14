import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';

// export let incrementalId = 3;

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingService: UserSettingService,
  ) {}

  @Query(() => User, {
    nullable: true,
    name: 'userById',
    description: 'Busca um usuário a partir do ID',
  })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  // @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  //   return this.userSettingService.getUserSettingById(user.id)
  // }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
