import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Book')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() bookname: string;

  @Column() bookpages: number;

  @Column() bookisbn: string;
 
  @Column()  bookprice: number;

  @Column()  bookpicture: string;

  @Column() bookquntity: number;

  @CreateDateColumn() createdAt : Date;

  @UpdateDateColumn() updatedAt : Date;
 
}
