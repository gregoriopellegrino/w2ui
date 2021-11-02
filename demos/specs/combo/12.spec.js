context("1: Combo", () => {
    context("1.5", () => {
        test("2:Context Menu", () => {
            bela
                .ready('/w2ui/demos/#/combo/12')
                .let({
                    '@box1': '#example_view > div:nth-child(2)',
                    '@box2': '#example_view > div:nth-child(3)'
                })
                .begin('First box')
                    .get('@box1').tag('Left box')
                    .trigger('contextmenu')
                    .wait('#w2ui-overlay', 'to.appear')
                    .get('#w2ui-overlay .w2ui-menu .menu-text:contains(Folder)').tag('Folder item')
                    .click()
                    .get('.menu-text:contains(Second item)').tag('Second item')
                    .get('body')
                    .click()
                .end()
                .begin('Second box')
                    .get('@box2').tag('Right box')
                    .trigger('contextmenu')
                    .wait('#w2ui-overlay', 'to.appear')
                    .get('#w2ui-overlay .w2ui-menu .menu-text')
                    .should('have.length', 16)
                    .get('body')
                    .click()
                .end()
        })

    })
})