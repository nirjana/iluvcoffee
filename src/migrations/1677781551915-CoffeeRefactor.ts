import { MigrationInterface, QueryRunner } from 'typeorm';


// up is where weare going to instruct what needs to be changed and how . while the down method is
// where we are going to undo or roll back of any changes 
export class CoffeeRefactor1677781551915 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
    `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
  );
  }

public async down(queryRunner: QueryRunner): Promise<any> {
  await queryRunner.query(
    `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
  );
}
}
