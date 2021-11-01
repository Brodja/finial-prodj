import {MigrationInterface, QueryRunner} from "typeorm";

export class v21635795007158 implements MigrationInterface {
    name = 'v21635795007158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."action" ADD "dateOfReturn" date `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."action" DROP COLUMN "dateOfReturn"`);
    }

}
