export const shaanRenaissance = {};

shaanRenaissance.SRdomains = {
    Shaan: "Shaan",
    Technique: "Technique",
    Savoir: "Savoir",
    Social: "Social",
    Arts: "Arts",
    Magie: "Magie",
    Rituels: "Rituels",
    Survie: "Survie",
    Combat: "Combat",
    Nécrose: "Nécrose",
    };
shaanRenaissance.createAcquis = {
    Armement: "Armement",
    Armimale: "Armimale",
    Artefact: "Artefact",
    Manuscrit: "Manuscrit",
    Outil: "Outil",
    Protection: "Protection",
    Relation: "Relation",
    Richesse: "Richesse",
    Technologie: "Technologie",
    Transport: "Transport",
    Bâtiment: "Bâtiment",
}
shaanRenaissance.pouvoirs = {
    trihns: {
        esprit: "Esprit",
        ame: "Âme",
        corps: "Corps",
        necrose: "Nécrose"
    },
    pouvoirSelect: {
        none: "",
        AstucedeTechnique: "Astuce de Technique",
        SecretdeSavoir: "Secret de Savoir",
        PrivilegedeSocial: "Privilège de Social",
        CréationdArts: "Création d'Arts",
        SymbiosedeShaan: "Symbiose de Shaan",
        SortdeMagie: "Sort de Magie",
        TransedeRituel: "Transe de Rituels",
        ExploitdeSurvie: "Exploit de Survie",
        TactiquedeCombat: "Tactique de Combat",
        TourmentdeNécrose: "Tourment de Nécrose"
    },
    pouvoirRank: {
        none: "",
        Rank1: "Rang 1",
        Rank2: "Rang 2",
        Rank3: "Rang 3",
        Rank4: "Rang 4",
    },
    pouvoirType: {
        none: "",
        attaque: "Attaque",
        défense: "Défense",
        déplacement: "Déplacement",
        amélioration: "Amélioration",
        altération: "Altération",
        invocation: "Invocation",
        controle: "Contrôle",
        perception: "Perception",
        recuperation: "Récupération"
    },
    pouvoirFréquence: {
        none: "",
        permanente: "Permanente",
        tour: "1/Tour",
        situation: "1/Situation",
        jour: "1/Jour",
        transition: "1/Transition"
    },
    pouvoirActivation: {
        none: "",
        geste: "1 Geste",
        action: "1 Action",
        actions: "2 Actions",
        actioncible: "1 Action par Cible",
        heure: "1 Heure",
        jour: "1 Jour",
        transition: "1 Transition",
        testparaction: "1 Test par Action",
        testparheure: "1 Test par Heure",
        testparjour: "1 Test par Jour",
        deuxactoumoinscorps: "2 Actions ou 1 Actions et -1 de Corps",
        untestdeuxactoumoinscorps: "1 Test toutes les 2 Actions ou 1 Test et -1 points de corps par Action"
    },
    pouvoirPortée: {
        none: "",
        soi: "Soi",
        contact: "Contact",
        interaction: "Interaction",
        distance: "Distance",
        horizon: "Horizon",
    }
};
shaanRenaissance.acquis = {
    category:{
        Armement: "Armement",
        Armimales: "Armimales",
        Artefacts: "Artefacts",
        Manuscrits: "Manuscrits",
        Outils: "Outils",
        Protections: "Protections",
        Relations: "Relations",
        Richesses: "Richesses",
        Technologie: "Technologie",
        Transport: "Transport"
    },
    class:{
        class1: "Classe 1",
        class2: "Classe 2",
        class3: "Classe 3",
        class4: "Classe 4",
        class5: "Classe 5"
    },
    caste:{
        none: "",
        Novateur: "Novateur",
        Erudit: "Erudit",
        Négociant: "Négociant",
        Artiste: "Artiste",
        Shaaniste: "Shaaniste",
        Magicien: "Magicien",
        Elementaliste: "Elementaliste",
        Voyageur: "Voyageur",
        Combattant: "Combattant",
        Ombre: "Ombre"
    },
    voie:{
        none: "",
        terrestre: "Terrestre",
        aerienne: "Aérienne",
        maritime: "Maritime"
    },
    Ressources: {
        Verre: "Verre",
        Bois: "Bois",
        Or: "Or",
        Population: "Population",
        Pierre: "Pierre",
        Trihnite: "Trihnite",
        Animal: "Animal",
        Cultures: "Cultures",
        Métal: "Métal",
        Hydrocarbure: "Hydrocarbure"
    }
}
shaanRenaissance.activeEffectChanges = {
    spés: {
        Technique: {
            "data.skills.Technique.specialisations.engrenages.bonus":"SRActiveEffect.changes.engrenagesBonus",
            "data.skills.Technique.specialisations.engrenages.acquis":"SRActiveEffect.changes.engrenagesAcquis",
            "data.skills.Technique.specialisations.pilotage.bonus":"SRActiveEffect.changes.pilotageBonus",
            "data.skills.Technique.specialisations.pilotage.acquis":"SRActiveEffect.changes.pilotageAcquis",
            "data.skills.Technique.specialisations.recuperation.bonus":"SRActiveEffect.changes.recuperationBonus",
            "data.skills.Technique.specialisations.recuperation.acquis":"SRActiveEffect.changes.recuperationAcquis",
            "data.skills.Technique.specialisations.sensdelapierre.bonus":"SRActiveEffect.changes.sensdelapierreBonus",
            "data.skills.Technique.specialisations.sensdelapierre.acquis":"SRActiveEffect.changes.sensdelapierreAcquis",
            "data.skills.Technique.specialisations.sensdubois.bonus":"SRActiveEffect.changes.sensduboisBonus",
            "data.skills.Technique.specialisations.sensdubois.acquisbonus":"SRActiveEffect.changes.sensduboisAcquis",
            "data.skills.Technique.specialisations.sensducuir.bonus":"SRActiveEffect.changes.sensducuirBonus",
            "data.skills.Technique.specialisations.sensducuir.acquis":"SRActiveEffect.changes.sensducuirAcquis",
            "data.skills.Technique.specialisations.sensdumetal.bonus":"SRActiveEffect.changes.sensdumetalBonus",
            "data.skills.Technique.specialisations.sensdumetal.acquis":"SRActiveEffect.changes.sensdumetalAcquis",
            "data.skills.Technique.specialisations.sensdutissu.bonus":"SRActiveEffect.changes.sensdutissuBonus",
            "data.skills.Technique.specialisations.sensdutissu.acquis":"SRActiveEffect.changes.sensdutissuAcquis",
            "data.skills.Technique.specialisations.sensduverre.bonus":"SRActiveEffect.changes.sensduverreBonus",
            "data.skills.Technique.specialisations.sensduverre.acquis":"SRActiveEffect.changes.sensduverreAcquis",
            "data.skills.Technique.specialisations.technologie.bonus":"SRActiveEffect.changes.technologieBonus",
            "data.skills.Technique.specialisations.technologie.acquis":"SRActiveEffect.changes.technologieAcquis"
        },
        Savoir: {
            "data.skills.Savoir.specialisations.alchimie.bonus":"SRActiveEffect.changes.alchimieBonus",
            "data.skills.Savoir.specialisations.alchimie.acquis":"SRActiveEffect.changes.alchimieAcquis",
            "data.skills.Savoir.specialisations.bibliotheque.bonus":"SRActiveEffect.changes.bibliothequeBonus",
            "data.skills.Savoir.specialisations.bibliotheque.acquis":"SRActiveEffect.changes.bibliothequeAcquis",
            "data.skills.Savoir.specialisations.botanique.bonus":"SRActiveEffect.changes.botaniqueBonus",
            "data.skills.Savoir.specialisations.botanique.acquis":"SRActiveEffect.changes.botaniqueAcquis",
            "data.skills.Savoir.specialisations.culturehumaine.bonus":"SRActiveEffect.changes.culturehumaineBonus",
            "data.skills.Savoir.specialisations.culturehumaine.acquis":"SRActiveEffect.changes.culturehumaineAcquis",
            "data.skills.Savoir.specialisations.esoterisme.bonus":"SRActiveEffect.changes.esoterismeBonus",
            "data.skills.Savoir.specialisations.esoterisme.acquis":"SRActiveEffect.changes.esoterismeAcquis",
            "data.skills.Savoir.specialisations.geologie.bonus":"SRActiveEffect.changes.geologieBonus",
            "data.skills.Savoir.specialisations.geologie.acquis":"SRActiveEffect.changes.geologieAcquis",
            "data.skills.Savoir.specialisations.histoiredheos.bonus":"SRActiveEffect.changes.histoiredheosBonus",
            "data.skills.Savoir.specialisations.histoiredheos.acquis":"SRActiveEffect.changes.histoiredheosAcquis",
            "data.skills.Savoir.specialisations.medecine.bonus":"SRActiveEffect.changes.medecineBonus",
            "data.skills.Savoir.specialisations.medecine.acquis":"SRActiveEffect.changes.medecineAcquis",
            "data.skills.Savoir.specialisations.protocoles.bonus":"SRActiveEffect.changes.protocolesBonus",
            "data.skills.Savoir.specialisations.protocoles.acquis":"SRActiveEffect.changes.protocolesAcquis",
            "data.skills.Savoir.specialisations.zoologie.bonus":"SRActiveEffect.changes.zoologieBonus",
            "data.skills.Savoir.specialisations.zoologie.acquis":"SRActiveEffect.changes.zoologieAcquis"
        },
        Social: {
            "data.skills.Social.specialisations.arpege.bonus":"SRActiveEffect.changes.arpegeBonus",
            "data.skills.Social.specialisations.arpege.acquis":"SRActiveEffect.changes.arpegeAcquis",
            "data.skills.Social.specialisations.bluff.bonus":"SRActiveEffect.changes.bluffBonus",
            "data.skills.Social.specialisations.bluff.acquis":"SRActiveEffect.changes.bluffAcquis",
            "data.skills.Social.specialisations.commerce.bonus":"SRActiveEffect.changes.commerceBonus",
            "data.skills.Social.specialisations.commerce.acquis":"SRActiveEffect.changes.commerceAcquis",
            "data.skills.Social.specialisations.diplomatie.bonus":"SRActiveEffect.changes.diplomatieBonus",
            "data.skills.Social.specialisations.diplomatie.acquis":"SRActiveEffect.changes.diplomatieAcquis",
            "data.skills.Social.specialisations.enseignement.bonus":"SRActiveEffect.changes.enseignementBonus",
            "data.skills.Social.specialisations.enseignement.acquis":"SRActiveEffect.changes.enseignementAcquis",
            "data.skills.Social.specialisations.langageprimal.bonus":"SRActiveEffect.changes.langageprimalBonus",
            "data.skills.Social.specialisations.langageprimal.acquis":"SRActiveEffect.changes.langageprimalAcquis",
            "data.skills.Social.specialisations.languesexotiques.bonus":"SRActiveEffect.changes.languesexotiquesBonus",
            "data.skills.Social.specialisations.languesexotiques.acquis":"SRActiveEffect.changes.languesexotiquesAcquis",
            "data.skills.Social.specialisations.psychologie.bonus":"SRActiveEffect.changes.psychologieBonus",
            "data.skills.Social.specialisations.psychologie.acquis":"SRActiveEffect.changes.psychologieAcquis",
            "data.skills.Social.specialisations.seduction.bonus":"SRActiveEffect.changes.seductionBonus",
            "data.skills.Social.specialisations.seduction.acquis":"SRActiveEffect.changes.seductionAcquis",
            "data.skills.Social.specialisations.vieurbaine.bonus":"SRActiveEffect.changes.vieurbaineBonus",
            "data.skills.Social.specialisations.vieurbaine.acquis":"SRActiveEffect.changes.vieurbaineAcquis"
        },
        Arts: {
            "data.skills.Arts.specialisations.artsappliques.bonus":"SRActiveEffect.changes.artsappliquesBonus",
            "data.skills.Arts.specialisations.artsappliques.acquis":"SRActiveEffect.changes.artsappliquesAcquis",
            "data.skills.Arts.specialisations.artsdufeu.bonus":"SRActiveEffect.changes.artsdufeuBonus",
            "data.skills.Arts.specialisations.artsdufeu.acquis":"SRActiveEffect.changes.artsdufeuAcquis",
            "data.skills.Arts.specialisations.chant.bonus":"SRActiveEffect.changes.chantBonus",
            "data.skills.Arts.specialisations.chant.acquis":"SRActiveEffect.changes.chantAcquis",
            "data.skills.Arts.specialisations.comedie.bonus":"SRActiveEffect.changes.comedieBonus",
            "data.skills.Arts.specialisations.comedie.acquis":"SRActiveEffect.changes.comedieAcquis",
            "data.skills.Arts.specialisations.deguisement.bonus":"SRActiveEffect.changes.deguisementBonus",
            "data.skills.Arts.specialisations.deguisement.acquis":"SRActiveEffect.changes.deguisementAcquis",
            "data.skills.Arts.specialisations.gastronomie.bonus":"SRActiveEffect.changes.gastronomieBonus",
            "data.skills.Arts.specialisations.gastronomie.acquis":"SRActiveEffect.changes.gastronomieAcquis",
            "data.skills.Arts.specialisations.langageducorps.bonus":"SRActiveEffect.changes.langageducorpsBonus",
            "data.skills.Arts.specialisations.langageducorps.acquis":"SRActiveEffect.changes.langageducorpsAcquis",
            "data.skills.Arts.specialisations.lettres.bonus":"SRActiveEffect.changes.lettresBonus",
            "data.skills.Arts.specialisations.lettres.acquis":"SRActiveEffect.changes.lettresAcquis",
            "data.skills.Arts.specialisations.musique.bonus":"SRActiveEffect.changes.musiqueBonus",
            "data.skills.Arts.specialisations.musique.acquis":"SRActiveEffect.changes.musiqueAcquis",
            "data.skills.Arts.specialisations.trucages.bonus":"SRActiveEffect.changes.trucagesBonus",
            "data.skills.Arts.specialisations.trucages.acquis":"SRActiveEffect.changes.trucagesAcquis"
        },
        Shaan: {
            "data.skills.Shaan.specialisations.embiose.bonus":"SRActiveEffect.changes.embioseBonus",
            "data.skills.Shaan.specialisations.embiose.acquis":"SRActiveEffect.changes.embioseAcquis",
            "data.skills.Shaan.specialisations.empathieanimale.bonus":"SRActiveEffect.changes.empathieanimaleBonus",
            "data.skills.Shaan.specialisations.empathieanimale.acquis":"SRActiveEffect.changes.empathieanimaleAcquis",
            "data.skills.Shaan.specialisations.empathieantheenne.bonus":"SRActiveEffect.changes.empathieantheenneBonus",
            "data.skills.Shaan.specialisations.empathieantheenne.acquis":"SRActiveEffect.changes.empathieantheenneAcquis",
            "data.skills.Shaan.specialisations.empathieminerale.bonus":"SRActiveEffect.changes.empathiemineraleBonus",
            "data.skills.Shaan.specialisations.empathieminerale.acquis":"SRActiveEffect.changes.empathiemineraleAcquis",
            "data.skills.Shaan.specialisations.empathievegetale.bonus":"SRActiveEffect.changes.empathievegetaleBonus",
            "data.skills.Shaan.specialisations.empathievegetale.acquis":"SRActiveEffect.changes.empathievegetaleAcquis",
            "data.skills.Shaan.specialisations.intuition.bonus":"SRActiveEffect.changes.intuitionBonus",
            "data.skills.Shaan.specialisations.intuition.acquis":"SRActiveEffect.changes.intuitionAcquis",
            "data.skills.Shaan.specialisations.reve.bonus":"SRActiveEffect.changes.reveBonus",
            "data.skills.Shaan.specialisations.reve.acquis":"SRActiveEffect.changes.reveAcquis",
            "data.skills.Shaan.specialisations.soinsdelame.bonus":"SRActiveEffect.changes.soinsdelameBonus",
            "data.skills.Shaan.specialisations.soinsdelame.acquis":"SRActiveEffect.changes.soinsdelameAcquis",
            "data.skills.Shaan.specialisations.soinsdelesprit.bonus":"SRActiveEffect.changes.soinsdelespritBonus",
            "data.skills.Shaan.specialisations.soinsdelesprit.acquis":"SRActiveEffect.changes.soinsdelespritAcquis",
            "data.skills.Shaan.specialisations.soinsducorps.bonus":"SRActiveEffect.changes.soinsducorpsBonus",
            "data.skills.Shaan.specialisations.soinsducorps.acquis":"SRActiveEffect.changes.soinsducorpsAcquis"
        },
        Magie: {
            "data.skills.Magie.specialisations.arcanes.bonus":"SRActiveEffect.changes.arcanesBonus",
            "data.skills.Magie.specialisations.arcanes.acquis":"SRActiveEffect.changes.arcanesAcquis",
            "data.skills.Magie.specialisations.conjuration.bonus":"SRActiveEffect.changes.conjurationBonus",
            "data.skills.Magie.specialisations.conjuration.acquis":"SRActiveEffect.changes.conjurationAcquis",
            "data.skills.Magie.specialisations.defensemagique.bonus":"SRActiveEffect.changes.defensemagiqueBonus",
            "data.skills.Magie.specialisations.defensemagique.acquis":"SRActiveEffect.changes.defensemagiqueAcquis",
            "data.skills.Magie.specialisations.enchantement.bonus":"SRActiveEffect.changes.enchantementBonus",
            "data.skills.Magie.specialisations.enchantement.acquis":"SRActiveEffect.changes.enchantementAcquis",
            "data.skills.Magie.specialisations.invocation.bonus":"SRActiveEffect.changes.invocationBonus",
            "data.skills.Magie.specialisations.invocation.acquis":"SRActiveEffect.changes.invocationAcquis",
            "data.skills.Magie.specialisations.incandescence.bonus":"SRActiveEffect.changes.incandescenceBonus",
            "data.skills.Magie.specialisations.incandescence.acquis":"SRActiveEffect.changes.incandescenceAcquis",
            "data.skills.Magie.specialisations.maitrisedesschemes.bonus":"SRActiveEffect.changes.maitrisedesschemesBonus",
            "data.skills.Magie.specialisations.maitrisedesschemes.acquis":"SRActiveEffect.changes.maitrisedesschemesAcquis",
            "data.skills.Magie.specialisations.regenerationdetrihn.bonus":"SRActiveEffect.changes.regenerationdetrihnBonus",
            "data.skills.Magie.specialisations.regenerationdetrihn.acquis":"SRActiveEffect.changes.regenerationdetrihnAcquis",
            "data.skills.Magie.specialisations.transfert.bonus":"SRActiveEffect.changes.transfertBonus",
            "data.skills.Magie.specialisations.transfert.acquis":"SRActiveEffect.changes.transfertAcquis",
            "data.skills.Magie.specialisations.voile.bonus":"SRActiveEffect.changes.voileBonus",
            "data.skills.Magie.specialisations.voile.acquis":"SRActiveEffect.changes.voileAcquis"
        },
        Rituels: {
            "data.skills.Rituels.specialisations.ritedarts.bonus":"SRActiveEffect.changes.ritedartsBonus",
            "data.skills.Rituels.specialisations.ritedarts.acquis":"SRActiveEffect.changes.ritedartsAcquis",
            "data.skills.Rituels.specialisations.ritedecombat.bonus":"SRActiveEffect.changes.ritedecombatBonus",
            "data.skills.Rituels.specialisations.ritedecombat.acquis":"SRActiveEffect.changes.ritedecombatAcquis",
            "data.skills.Rituels.specialisations.ritedelanimal.bonus":"SRActiveEffect.changes.ritedelanimalBonus",
            "data.skills.Rituels.specialisations.ritedelanimal.acquis":"SRActiveEffect.changes.ritedelanimalAcquis",
            "data.skills.Rituels.specialisations.ritedemagie.bonus":"SRActiveEffect.changes.ritedemagieBonus",
            "data.skills.Rituels.specialisations.ritedemagie.acquis":"SRActiveEffect.changes.ritedemagieAcquis",
            "data.skills.Rituels.specialisations.ritedenecrose.bonus":"SRActiveEffect.changes.ritedenecroseBonus",
            "data.skills.Rituels.specialisations.ritedenecrose.acquis":"SRActiveEffect.changes.ritedenecroseAcquis",
            "data.skills.Rituels.specialisations.ritedesavoir.bonus":"SRActiveEffect.changes.ritedesavoirBonus",
            "data.skills.Rituels.specialisations.ritedesavoir.acquis":"SRActiveEffect.changes.ritedesavoirAcquis",
            "data.skills.Rituels.specialisations.ritedeshaan.bonus":"SRActiveEffect.changes.ritedeshaanBonus",
            "data.skills.Rituels.specialisations.ritedeshaan.acquis":"SRActiveEffect.changes.ritedeshaanAcquis",
            "data.skills.Rituels.specialisations.ritedesocial.bonus":"SRActiveEffect.changes.ritedesocialBonus",
            "data.skills.Rituels.specialisations.ritedesocial.acquis":"SRActiveEffect.changes.ritedesocialAcquis",
            "data.skills.Rituels.specialisations.ritedesurvie.bonus":"SRActiveEffect.changes.ritedesurvieBonus",
            "data.skills.Rituels.specialisations.ritedesurvie.acquis":"SRActiveEffect.changes.ritedesurvieAcquis",
            "data.skills.Rituels.specialisations.ritedetechnique.bonus":"SRActiveEffect.changes.ritedetechniqueBonus",
            "data.skills.Rituels.specialisations.ritedetechnique.acquis":"SRActiveEffect.changes.ritedetechniqueAcquis"
        },
        Survie: {
            "data.skills.Survie.specialisations.acrobatie.bonus":"SRActiveEffect.changes.acrobatieBonus",
            "data.skills.Survie.specialisations.acrobatie.acquis":"SRActiveEffect.changes.acrobatieAcquis",
            "data.skills.Survie.specialisations.caravane.bonus":"SRActiveEffect.changes.caravaneBonus",
            "data.skills.Survie.specialisations.caravane.acquis":"SRActiveEffect.changes.caravaneAcquis",
            "data.skills.Survie.specialisations.cultureheossienne.bonus":"SRActiveEffect.changes.cultureheossienneBonus",
            "data.skills.Survie.specialisations.cultureheossienne.acquis":"SRActiveEffect.changes.cultureheossienneAcquis",
            "data.skills.Survie.specialisations.culturenecrosienne.bonus":"SRActiveEffect.changes.culturenecrosienneBonus",
            "data.skills.Survie.specialisations.culturenecrosienne.acquis":"SRActiveEffect.changes.culturenecrosienneAcquis",
            "data.skills.Survie.specialisations.discretion.bonus":"SRActiveEffect.changes.discretionBonus",
            "data.skills.Survie.specialisations.discretion.acquis":"SRActiveEffect.changes.discretionAcquis",
            "data.skills.Survie.specialisations.educationphysique.bonus":"SRActiveEffect.changes.educationphysiqueBonus",
            "data.skills.Survie.specialisations.educationphysique.acquis":"SRActiveEffect.changes.educationphysiqueAcquis",
            "data.skills.Survie.specialisations.monture.bonus":"SRActiveEffect.changes.montureBonus",
            "data.skills.Survie.specialisations.monture.acquis":"SRActiveEffect.changes.montureAcquis",
            "data.skills.Survie.specialisations.navigation.bonus":"SRActiveEffect.changes.navigationBonus",
            "data.skills.Survie.specialisations.navigation.acquis":"SRActiveEffect.changes.navigationAcquis",
            "data.skills.Survie.specialisations.viesauvage.bonus":"SRActiveEffect.changes.viesauvageBonus",
            "data.skills.Survie.specialisations.viesauvage.acquis":"SRActiveEffect.changes.viesauvageAcquis",
            "data.skills.Survie.specialisations.vigilance.bonus":"SRActiveEffect.changes.vigilanceBonus",
            "data.skills.Survie.specialisations.vigilance.acquis":"SRActiveEffect.changes.vigilanceAcquis"
        },
        Combat: {
            "data.skills.Combat.specialisations.armeslancees.bonus":"SRActiveEffect.changes.armeslanceesBonus",
            "data.skills.Combat.specialisations.armeslancees.acquis":"SRActiveEffect.changes.armeslanceesAcquis",
            "data.skills.Combat.specialisations.armesdemelee.bonus":"SRActiveEffect.changes.armesdemeleeBonus",
            "data.skills.Combat.specialisations.armesdemelee.acquis":"SRActiveEffect.changes.armesdemeleeAcquis",
            "data.skills.Combat.specialisations.armesaprojectiles.bonus":"SRActiveEffect.changes.armesaprojectilesBonus",
            "data.skills.Combat.specialisations.armesaprojectiles.acquis":"SRActiveEffect.changes.armesaprojectilesAcquis",
            "data.skills.Combat.specialisations.armimales.bonus":"SRActiveEffect.changes.armimalesBonus",
            "data.skills.Combat.specialisations.armimales.acquis":"SRActiveEffect.changes.armimalesAcquis",
            "data.skills.Combat.specialisations.enginsdeguerre.bonus":"SRActiveEffect.changes.enginsdeguerreBonus",
            "data.skills.Combat.specialisations.enginsdeguerre.acquis":"SRActiveEffect.changes.enginsdeguerreAcquis",
            "data.skills.Combat.specialisations.esquive.bonus":"SRActiveEffect.changes.esquiveBonus",
            "data.skills.Combat.specialisations.esquive.acquis":"SRActiveEffect.changes.esquiveAcquis",
            "data.skills.Combat.specialisations.forcer.bonus":"SRActiveEffect.changes.forcerBonus",
            "data.skills.Combat.specialisations.forcer.acquis":"SRActiveEffect.changes.forcerAcquis",
            "data.skills.Combat.specialisations.intimidation.bonus":"SRActiveEffect.changes.intimidationBonus",
            "data.skills.Combat.specialisations.intimidation.acquis":"SRActiveEffect.changes.intimidationAcquis",
            "data.skills.Combat.specialisations.pugilat.bonus":"SRActiveEffect.changes.pugilatBonus",
            "data.skills.Combat.specialisations.pugilat.acquis":"SRActiveEffect.changes.pugilatAcquis",
            "data.skills.Combat.specialisations.strategie.bonus":"SRActiveEffect.changes.strategieBonus",
            "data.skills.Combat.specialisations.strategie.acquis":"SRActiveEffect.changes.strategieAcquis"
        },
        Nécrose: {
            "data.skills.Nécrose.specialisations.armeshumaines.bonus":"SRActiveEffect.changes.armeshumainesBonus",
            "data.skills.Nécrose.specialisations.armeshumaines.acquis":"SRActiveEffect.changes.armeshumainesAcquis",
            "data.skills.Nécrose.specialisations.biomorphie.bonus":"SRActiveEffect.changes.biomorphieBonus",
            "data.skills.Nécrose.specialisations.biomorphie.acquis":"SRActiveEffect.changes.biomorphieAcquis",
            "data.skills.Nécrose.specialisations.cauchemar.bonus":"SRActiveEffect.changes.cauchemarBonus",
            "data.skills.Nécrose.specialisations.cauchemar.acquis":"SRActiveEffect.changes.cauchemarAcquis",
            "data.skills.Nécrose.specialisations.contrebande.bonus":"SRActiveEffect.changes.contrebandeBonus",
            "data.skills.Nécrose.specialisations.contrebande.acquis":"SRActiveEffect.changes.contrebandeAcquis",
            "data.skills.Nécrose.specialisations.corruption.bonus":"SRActiveEffect.changes.corruptionBonus",
            "data.skills.Nécrose.specialisations.corruption.acquis":"SRActiveEffect.changes.corruptionAcquis",
            "data.skills.Nécrose.specialisations.explosifs.bonus":"SRActiveEffect.changes.explosifsBonus",
            "data.skills.Nécrose.specialisations.explosifs.acquis":"SRActiveEffect.changes.explosifsAcquis",
            "data.skills.Nécrose.specialisations.fraude.bonus":"SRActiveEffect.changes.fraudeBonus",
            "data.skills.Nécrose.specialisations.fraude.acquis":"SRActiveEffect.changes.fraudeAcquis",
            "data.skills.Nécrose.specialisations.harcelement.bonus":"SRActiveEffect.changes.harcelementBonus",
            "data.skills.Nécrose.specialisations.harcelement.acquis":"SRActiveEffect.changes.harcelementAcquis",
            "data.skills.Nécrose.specialisations.larcin.bonus":"SRActiveEffect.changes.larcinBonus",
            "data.skills.Nécrose.specialisations.larcin.acquis":"SRActiveEffect.changes.larcinAcquis",
            "data.skills.Nécrose.specialisations.pactenecrotique.bonus":"SRActiveEffect.changes.pactenecrotiqueBonus",
            "data.skills.Nécrose.specialisations.pactenecrotique.acquis":"SRActiveEffect.changes.pactenecrotiqueAcquis"
        }
    },
    protections: {
        "data.protections.esprit.value":"SRLabels.Esprit",
        "data.protections.ame.value":"SRLabels.Ame",
        "data.protections.corps.value":"SRLabels.Corps"
    }
}
