<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Services
 *
 * @ORM\Table(name="services")
 * @ORM\Entity
 */
class Services
{
    /**
     * @var int
     *
     * @ORM\Column(name="service_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $serviceId;

    /**
     * @var string|null
     *
     * @ORM\Column(name="service_nom", type="string", length=255, nullable=true)
     */
    private $serviceNom;

    /**
     * @var string|null
     *
     * @ORM\Column(name="service_description", type="string", length=255, nullable=true)
     */
    private $serviceDescription;

    /**
     * @var string|null
     *
     * @ORM\Column(name="service_image", type="string", length=255, nullable=true)
     */
    private $serviceImage;

    /**
     * @var int|null
     *
     * @ORM\Column(name="nb_sous_services", type="integer", nullable=true)
     */
    private $nbSousServices;

    public function getServiceId(): ?int
    {
        return $this->serviceId;
    }

    public function getServiceNom(): ?string
    {
        return $this->serviceNom;
    }

    public function setServiceNom(?string $serviceNom): self
    {
        $this->serviceNom = $serviceNom;

        return $this;
    }

    public function getServiceDescription(): ?string
    {
        return $this->serviceDescription;
    }

    public function setServiceDescription(?string $serviceDescription): self
    {
        $this->serviceDescription = $serviceDescription;

        return $this;
    }

    public function getServiceImage(): ?string
    {
        return $this->serviceImage;
    }

    public function setServiceImage(?string $serviceImage): self
    {
        $this->serviceImage = $serviceImage;

        return $this;
    }

    public function getNbSousServices(): ?int
    {
        return $this->nbSousServices;
    }

    public function setNbSousServices(?int $nbSousServices): self
    {
        $this->nbSousServices = $nbSousServices;

        return $this;
    }


}
