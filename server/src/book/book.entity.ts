import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Book')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column("varchar") bookname: string;

  @Column() bookpages: number;

  @Column({type: "varchar", unique: true}) bookisbn: string;
 
  @Column()  bookprice: number;

  @Column({type : "varchar", nullable : true})  bookpicture: string;

  @Column({nullable : true}) bookqauntity: number;

  @CreateDateColumn() createdAt : Date;

  @UpdateDateColumn() updatedAt : Date;
 
}
