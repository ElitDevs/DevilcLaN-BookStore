import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("Category")
export class  CategoryEntity {
    @PrimaryGeneratedColumn() id :number;

    @Column() categoryname: string;
}