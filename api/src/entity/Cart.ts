import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    payment_date: string

    @Column()
    user: number

    @Column()
    price: number

    @Column({
        nullable: true
    })
    orderDetails: string

   

}
