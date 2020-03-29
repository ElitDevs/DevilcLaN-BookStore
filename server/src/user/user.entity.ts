import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { BookEntity } from 'src/book/book.entity';
import * as bcrypt from 'bcryptjs';
@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  firstname: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  lastname: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  age: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  profilepicture: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone: string;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }
}
