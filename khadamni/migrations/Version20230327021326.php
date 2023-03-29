<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230327021326 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE rate CHANGE id id INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE reclamations DROP FOREIGN KEY reclamations_ibfk_2');
        $this->addSql('ALTER TABLE reclamations DROP FOREIGN KEY reclamations_ibfk_1');
        $this->addSql('ALTER TABLE reclamations CHANGE utilisateur_id utilisateur_id INT DEFAULT NULL, CHANGE freelancer_id freelancer_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reclamations ADD CONSTRAINT FK_1CAD6B768545BDF5 FOREIGN KEY (freelancer_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE reclamations ADD CONSTRAINT FK_1CAD6B76FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE reponse DROP FOREIGN KEY reponse_ibfk_1');
        $this->addSql('ALTER TABLE reponse CHANGE reclamation_id reclamation_id INT AUTO_INCREMENT NOT NULL, CHANGE freelancer_id freelancer_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reponse ADD CONSTRAINT FK_5FB6DEC78545BDF5 FOREIGN KEY (freelancer_id) REFERENCES utilisateur (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE messenger_messages');
        $this->addSql('ALTER TABLE rate CHANGE id id INT NOT NULL');
        $this->addSql('ALTER TABLE reclamations DROP FOREIGN KEY FK_1CAD6B768545BDF5');
        $this->addSql('ALTER TABLE reclamations DROP FOREIGN KEY FK_1CAD6B76FB88E14F');
        $this->addSql('ALTER TABLE reclamations CHANGE freelancer_id freelancer_id INT NOT NULL, CHANGE utilisateur_id utilisateur_id INT NOT NULL');
        $this->addSql('ALTER TABLE reclamations ADD CONSTRAINT reclamations_ibfk_2 FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id) ON UPDATE CASCADE ON DELETE CASCADE');
        $this->addSql('ALTER TABLE reclamations ADD CONSTRAINT reclamations_ibfk_1 FOREIGN KEY (freelancer_id) REFERENCES utilisateur (id) ON UPDATE CASCADE ON DELETE CASCADE');
        $this->addSql('ALTER TABLE reponse DROP FOREIGN KEY FK_5FB6DEC78545BDF5');
        $this->addSql('ALTER TABLE reponse CHANGE reclamation_id reclamation_id INT NOT NULL, CHANGE freelancer_id freelancer_id INT NOT NULL');
        $this->addSql('ALTER TABLE reponse ADD CONSTRAINT reponse_ibfk_1 FOREIGN KEY (freelancer_id) REFERENCES utilisateur (id) ON UPDATE CASCADE ON DELETE CASCADE');
    }
}
