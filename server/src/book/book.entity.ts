import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Book')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column("varchar") bookname: string;

  @Column() bookpages: number;

  @Column("varchar") bookisbn: string;
 
  @Column()  bookprice: number;

  @Column("varchar")  bookpicture: string;

  @Column() bookqauntity: number;

  @CreateDateColumn() createdAt : Date;

  @UpdateDateColumn() updatedAt : Date;
 
}
