<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SousServices
 *
 * @ORM\Table(name="sous_services", indexes={@ORM\Index(name="sous_services_ibfk_1", columns={"Service_id"})})
 * @ORM\Entity
 */
class SousServices
{
    /**
     * @var int
     *
     * @ORM\Column(name="Sous_service_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $sousServiceId;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Sous_service_nom", type="string", length=255, nullable=true)
     */
    private $sousServiceNom;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Sous_service_description", type="string", length=255, nullable=true)
     */
    private $sousServiceDescription;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Sous_service_image", type="string", length=255, nullable=true)
     */
    private $sousServiceImage;

    /**
     * @var int|null
     *
     * @ORM\Column(name="Service_id", type="integer", nullable=true)
     */
    private $serviceId;

    public function getSousServiceId(): ?int
    {
        return $this->sousServiceId;
    }

    public function getSousServiceNom(): ?string
    {
        return $this->sousServiceNom;
    }

    public function setSousServiceNom(?string $sousServiceNom): self
    {
        $this->sousServiceNom = $sousServiceNom;

        return $this;
    }

    public function getSousServiceDescription(): ?string
    {
        return $this->sousServiceDescription;
    }

    public function setSousServiceDescription(?string $sousServiceDescription): self
    {
        $this->sousServiceDescription = $sousServiceDescription;

        return $this;
    }

    public function getSousServiceImage(): ?string
    {
        return $this->sousServiceImage;
    }

    public function setSousServiceImage(?string $sousServiceImage): self
    {
        $this->sousServiceImage = $sousServiceImage;

        return $this;
    }

    public function getServiceId(): ?int
    {
        return $this->serviceId;
    }

    public function setServiceId(?int $serviceId): self
    {
        $this->serviceId = $serviceId;

        return $this;
    }


}
