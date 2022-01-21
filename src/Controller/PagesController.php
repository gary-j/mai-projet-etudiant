<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    /**
     * @Route("/about", name="pages_about")
     */
    public function index()
    {
        return $this->render('pages/about.html.twig', []);
    }

    /**
     * @Route("/equipe-afrique", name="pages_equipe_afrique")
     */
    public function equipe()
    {
        return $this->render('pages/equipe-afrique.html.twig', []);
    }

    /**
     * @Route("/evenements", name="pages_evenements")
     */
    public function evenements()
    {
        return $this->render('pages/evenements.html.twig', []);
    }

    /**
     * @Route("/faire-un-don", name="pages_dons")
     */
    public function dons()
    {
        return $this->render('pages/dons.html.twig', []);
    }

    /**
     * @Route("/merci", name="pages_remerciements")
     */
    public function remerciements()
    {
        return $this->render('pages/remerciements.html.twig', []);
    }

    /**
     * @Route("/devenir-ambassadeur", name="pages_ambassadeur")
     */
    public function ambassadeur()
    {
        return $this->render('pages/ambassadeur.html.twig', []);
    }



    /**
     * @Route("/devenir-mentor", name="pages_mentor")
     */
    public function mentor()
    {
        return $this->render('pages/mentor.html.twig', []);
    }

    /**
     * @Route("/incubateur", name="pages_incubateur")
     */
    public function incubateur()
    {
        return $this->render('pages/incubateur.html.twig', []);
    }

    /**
     * @Route("/devenir-partenaire", name="pages_partenaire")
     */
    public function partenaire()
    {
        return $this->render('pages/partenaire.html.twig', []);
    }

    /**
     * @Route("/devenir-adherent", name="pages_adherent")
     */
    public function adherent()
    {
        return $this->render('pages/adherent.html.twig', []);
    }
    /**
     * @Route("/devenir-benevole", name="pages_benevole")
     */
    public function benevole()
    {
        return $this->render('pages/benevoles.html.twig', []);
    }
}
