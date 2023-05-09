import * as Dice from "../jets/dice.js";

export default class ShaanNPCSheet extends ActorSheet {
    static get defaultOptions() {
        const options = super.defaultOptions;
        return options.classes = [...options.classes, "PNJ"], options.width = 900, options.height = 700,options.scrollY.push(".window-content"), options
    }
    get template(){
        return `systems/Shaan_Renaissance/templates/actors/${this.actor.type}/sheet.hbs`;
    }
    async getData(options = this.options) {
        options.id || (options.id = this.id);
        const actorData = this.actor.toObject(!1),
            sheetData = {
                cssClass: this.actor.isOwner ? "editable" : "locked",
                editable: this.isEditable,
                document: this.actor,
                limited: this.actor.limited,
                owner: this.actor.isOwner,
                title: this.title,
                actor: actorData,
                data: actorData.system,
                items: actorData.items,
                config: CONFIG.shaanRenaissance,
                user: {
                    isGM: game.user.isGM
                },
            };
            sheetData.acquis = actorData.items.filter(function (item) { return item.type == "Armement" || item.type == "Armimale" || item.type == "Artefact" ||  item.type == "Manuscrit" || item.type == "Outil" || item.type == "Protection" || item.type == "Relation" || item.type == "Richesse" || item.type == "Technologie" || item.type == "Transport" || item.type == "Bâtiment" || item.type == "Trihn"});
        
            sheetData.pouvoirs = actorData.items.filter(function (item) { return item.type == "Pouvoir" });

            if (typeof sheetData.data.attributes.hpEsprit !== "undefined") {
                sheetData.data.attributes.hpEsprit.value = (Math.max(sheetData.data.skills.Technique.rank, sheetData.data.skills.Savoir.rank, sheetData.data.skills.Social.rank)) + (Math.min(sheetData.data.skills.Technique.rank, sheetData.data.skills.Savoir.rank, sheetData.data.skills.Social.rank))
                sheetData.data.attributes.hpAme.value = (Math.max(sheetData.data.skills.Arts.rank, sheetData.data.skills.Shaan.rank, sheetData.data.skills.Magie.rank)) + (Math.min(sheetData.data.skills.Arts.rank, sheetData.data.skills.Shaan.rank, sheetData.data.skills.Magie.rank))
                sheetData.data.attributes.hpCorps.value = (Math.max(sheetData.data.skills.Rituels.rank, sheetData.data.skills.Survie.rank, sheetData.data.skills.Combat.rank)) + (Math.min(sheetData.data.skills.Rituels.rank, sheetData.data.skills.Survie.rank, sheetData.data.skills.Combat.rank))
                // Initiative
                const domain = sheetData.data.attributes.initiative.statistic,
                domainValue = actorData.system.skills[domain].rank + actorData.system.skills[domain].temp;
                sheetData.data.attributes.initiative.value = domainValue
                game.actors.get(actorData._id).getRollData().attributes.initiative.value = domainValue
            }
        // Filtre Race
        let race = actorData.items.filter(function (item) { return item.type == "Race"});
        let lastElement = race[race.length - 1]
        
        race.forEach(element => {
            if(element != lastElement) {
                let itemId = element._id
                return this.actor.deleteEmbeddedDocuments("Item", [itemId])
            }
        });
        sheetData.Race = lastElement
        // Filtre Peuple
        let peuple = actorData.items.filter(function (item) { return item.type == "Peuple"});
        lastElement = peuple[peuple.length - 1]
        
        peuple.forEach(element => {
            if(element != lastElement) {
                let itemId = element._id
                return this.actor.deleteEmbeddedDocuments("Item", [itemId])
            }
        });
        sheetData.Peuple = lastElement
        // Filtre Caste
        let caste = actorData.items.filter(function (item) { return item.type == "Caste"});
        lastElement = caste[caste.length - 1]
        
        caste.forEach(element => {
            if(element != lastElement) {
                let itemId = element._id
                return this.actor.deleteEmbeddedDocuments("Item", [itemId])
            }
        });
        sheetData.Caste = lastElement
        // Filtre Métier
        let metier = actorData.items.filter(function (item) { return item.type == "Métier"});
        lastElement = metier[metier.length - 1]
        
        metier.forEach(element => {
            if(element != lastElement) {
                let itemId = element._id
                return this.actor.deleteEmbeddedDocuments("Item", [itemId])
            }
        });
        sheetData.Metier = lastElement
            

        console.log(sheetData);
        return sheetData;
    }
    activateListeners(html) {
        if (this.isEditable) {
            html.find(".item-createNPC").click(this._onItemCreateNPC.bind(this)); 
            html.find(".item-edit").click(this._onItemEdit.bind(this));
            html.find(".item-delete").click(this._onItemDelete.bind(this)); 
            html.find(".open-compendium").on("click", (event => {
                            if (event.currentTarget.dataset.compendium) {
                                const compendium = game.packs.get(event.currentTarget.dataset.compendium);
                                console.log(compendium)
                                compendium && compendium.render(!0)
                            }
                        })) 

        super.activateListeners(html);
        }
        if (this.actor.isOwner) {
            html.find(".roll-initiative").click(this._onInitiative.bind(this));
            html.find(".roll-icon").click(this._onTest.bind(this));
            html.find(".spéTest").click(this._onSpéTest.bind(this));
            html.find(".spéTestNécr").click(this._onSpéTestNécr.bind(this));

        }
    }

    _onSpéTest(event) {
        let actor = this.actor
        let domain = $(event.target.closest(".npc")).children(".specialisations-title").find(".specialisations-label").text()
        let spécialisation = $(event.target).text().toLowerCase().replaceAll(' ', '').replace("'", '').replaceAll("é", "e").replace("è", "e").replace("ê", "e").replace("à", "a").replace("â", "a").replace("î", "i");

        Dice.SpéTest({
            actor,
            domain: domain,
            spécialisation: spécialisation
        });
    }

    _onSpéTestNécr(event) {
        let actor = this.actor
        let domain = $(event.target.closest(".npc")).children(".specialisations-title").find(".specialisations-label").text()
        let spécialisation = $(event.target).text().toLowerCase().replaceAll(' ', '').replace("'", '').replaceAll("é", "e").replace("è", "e").replace("ê", "e").replace("à", "a").replace("â", "a").replace("î", "i");
        // Filtre Race
        const actorData = this.actor.toObject(!1)
        let race = actorData.items.filter(function (item) { return item.type == "Race"});
        let lastElement = race[race.length - 1]
        
        race.forEach(element => {
            if(element != lastElement) {
                let itemId = element._id
                return this.actor.deleteEmbeddedDocuments("Item", [itemId])
            }
        });
        race = lastElement.name

        Dice.SpéTestNécr({
            actor,
            race,
            domain: domain,
            spécialisation: spécialisation
        });

    }

    _onInitiative(event) {
        const dataset = event.currentTarget.dataset;
        let actor = this.actor

        Dice.Initiative({
            actor,
            domain: dataset.domain,
            domainLevel: dataset.domainLevel
        });
    }
    _onTest(event) {
        const dataset = event.target.closest(".roll-data").dataset.itemId;
        let actor = this.actor
        const actorData = this.actor.toObject(!1)
        // Filtre Race
        let race = actorData.items.filter(function (item) { return item.type == "Race"});
        let lastElement = race[race.length - 1]
        
        race.forEach(element => {
            if(element != lastElement) {
                let itemId = element._id
                return this.actor.deleteEmbeddedDocuments("Item", [itemId])
            }
        });
        race = lastElement.name

        if(dataset == "domainTest" || "necroseTest") {
            Dice[dataset]({
                actor,
                race,
                checkType: dataset
            })
        }

    }

    _onItemCreateNPC(event) {
        event.preventDefault();
        const pouvoirBtn = event.target.closest("#pouvoir-add");
        const acquisBtn = event.target.closest("#acquis-add");

        if (pouvoirBtn) {
            let itemData = {
          name: "Nouveau pouvoir",
          type: "Pouvoir"
        };

        return this.actor.createEmbeddedDocuments("Item", [itemData]);
        }
        this.actor.sheet.render();

        if(acquisBtn) { 
        let actor = this.actor

        acquisCreate({
            actor,
        })
        

        async function acquisCreate ({
            actor = null,
            type = null
        } = {}) {
            
        const actorData = actor ? actor.system : null;
        let checkOptions = await GetAcquisOptions ({type})

        if (checkOptions.cancelled) {
            return;
        }

        type = checkOptions.type

        let itemData = {
          name: "Nouvel Acquis",
          type: type,
          img:"systems/Shaan_Renaissance/assets/icons/navbar/icon_acquis.webp"
        };
        return actor.createEmbeddedDocuments("Item", [itemData]);

        async function GetAcquisOptions({
            type = null,
            template = "systems/Shaan_Renaissance/templates/actors/PNJ/partials/createAcquis-dialog.hbs"} = {}) {
                const actorData = actor.toObject(!1);
                actorData.itemTypes = {
                    Armement: {}, Armimale: {}, Artefact: {}, Manuscrit: {}, Outil: {}, Protection: {}, Relation: {}, Richesse: {}, Technologie: {}, Transport: {}, Bâtiment: {}, Trihn: {}
                }
                const html = await renderTemplate(template, { actor, type });

                return new Promise(resolve => {
                    const data = {
                        title: game.i18n.format("Création d'Acquis"),
                        content: html,
                        actor: actorData,
                        buttons: {
                            normal: {
                              label: game.i18n.localize("chat.actions.create"),
                              callback: html => resolve(_processAcquisCreateOptions(html[0].querySelector("form")))
                            },
                            cancel: {
                              label: game.i18n.localize("chat.actions.cancel"),
                              callback: html => resolve({ cancelled: true })
                            }
                          },
                          default: "normal",
                          close: () => resolve({ cancelled: true }),
                        };
                        new Dialog(data,null).render(true);
                      });
            }
            function _processAcquisCreateOptions(form) {
                return {
                 type: form.type?.value
                }
              }
        }
    }
    }
    
    _onItemEdit(event) {
        event.preventDefault();
        let element = event.target
        let itemId = element.closest(".item").dataset.itemId;
        let item = this.actor.items.get(itemId);

        item.sheet.render(true);
    }
    _onItemDelete(event) {
        event.preventDefault();
        let element = event.target
        let itemId = element.closest(".item").dataset.itemId;
        return this.actor.deleteEmbeddedDocuments("Item", [itemId])
    }


}
