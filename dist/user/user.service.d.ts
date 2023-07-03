import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { HttpService } from '@nestjs/axios';
export declare class UserService {
    private userRepository;
    private httpService;
    constructor(userRepository: Repository<UserEntity>, httpService: HttpService);
    getNeteaseUserInfo(token: string): Promise<any>;
    findOneByNeteaseId(id: number): Promise<UserEntity>;
    findUsersByName(name: string): Promise<UserEntity[]>;
    register(token: string): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findWithPaging(page: number, limit: number): Promise<UserEntity[]>;
    listCount(): Promise<number>;
}
