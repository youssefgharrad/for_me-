<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * Reponse
 *
 * @ORM\Table(name="reponse", indexes={@ORM\Index(name="utilisateur_id", columns={"utilisateur_id"}), @ORM\Index(name="freelancer_id", columns={"freelancer_id"})})
 * @ORM\Entity
 */
class Reponse
{
    /**
     * @var int
     *
     * @ORM\Column(name="reclamation_id", type="integer", nullable=false)
     * @ORM\Id
     */
    public $reclamationId;

    /**
     * @var string
     *
     * @ORM\Column(name="disc", type="string", length=255, nullable=false)
     */
    private $disc;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_rep", type="date", nullable=false)
     */
    private $dateRep;

    /**
     * @var \Utilisateur
     *
     * @ORM\ManyToOne(targetEntity="Utilisateur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="utilisateur_id", referencedColumnName="id")
     * })
     */
    private $utilisateurId;

    /**
     * @var \Utilisateur
     *
     * @ORM\ManyToOne(targetEntity="Utilisateur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="freelancer_id", referencedColumnName="id")
     * })
     */
    private $freelancer;

    public function getReclamationId(): ?int
    {
        return $this->reclamationId;
    }

    public function setId(int $reclamationId): self
    {
        $this->reclamationId = $reclamationId;

        return $this;
    }

    public function getDisc(): ?string
    {
        return $this->disc;
    }

    public function setDisc(string $disc): self
    {
        $this->disc = $disc;

        return $this;
    }

    public function getDateRep(): ?\DateTimeInterface
    {
        return $this->dateRep;
    }

    public function setDateRep(\DateTimeInterface $dateRep): self
    {
        $this->dateRep = $dateRep;

        return $this;
    }

    public function getUtilisateurId(): ?Utilisateur
    {
        return $this->utilisateurId;
    }

    public function setUtilisateurId(Utilisateur $utilisateurId): self
    {
        $this->utilisateurId = $utilisateurId;

        return $this;
    }

    public function getFreelancer(): ?Utilisateur
    {
        return $this->freelancer;
    }

    public function setFreelancer(?Utilisateur $freelancer): self
    {
        $this->freelancer = $freelancer;

        return $this;
    }


}
