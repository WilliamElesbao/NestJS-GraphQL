import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UserSettingService } from 'src/users/UserSettingService';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingService) {}

  @Mutation(() => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    const userSetting = await this.userSettingsService.createUserSettings(
      createUserSettingsData,
    );
    return userSetting;
  }
}
