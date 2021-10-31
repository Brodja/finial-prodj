import {MigrationInterface, QueryRunner} from "typeorm";

export class v11635692041328 implements MigrationInterface {
    name = 'v11635692041328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "studentId" character varying NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "middleName" character varying NOT NULL, "birthday" integer NOT NULL, "logoName" character varying, "startYear" integer NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
