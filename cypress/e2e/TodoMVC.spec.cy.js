describe('Todo-list', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/#')
    })
    
    it('Crear tarea', () => {

        cy.get('.new-todo').type('Comprar el pan {enter}')

        cy.get('.todo-list').contains('Comprar el pan')
    })

    it('Marcar tarea como completada', ()=>{ 

        cy.get('.new-todo').type('Comprar el pan {enter}')

        cy.get('.toggle').check()

        cy.get('.todo-list li').should('have.class', 'completed')
    })

    
    it('Desmarcar tarea como completada', ()=>{
        

        cy.get('.new-todo').type('Comprar el pan {enter}')

        cy.get('.toggle').click()

        cy.get('.todo-list li').should('have.class', 'completed')

        cy.get('.toggle').click()

        cy.get('.todo-list li').should('have.class', '')
    })
    
    it('edita una tarea existente', () => {
        
        cy.get('.new-todo').type('Comprar water{enter}')

        cy.get('.todo-list li').dblclick()

        cy.get('.view > .input-container > [data-testid]').clear().type('Comprar código weno{enter}')

        /*
        cy.get('.view > .input-container > [data-testid="text-input"]')
        .should('exist') // Verifica que el input de edición existe
        .clear() // Fuerza la limpieza del campo de texto
        .type('comprar leche{enter}', {force: true}); // Escribe y fuerza la acción
        */

        //cy.get('.input-container').should('be.visible').clear().type('comprar leche{enter}');
        //cy.get('[data-testid="todo-item-label"]').clear().type('comprar leche{enter}');
        
    
        cy.get('.todo-list li').should('contain', 'Comprar código weno')
    })
    


    it('Borrar tarea', ()=>{
        
        cy.get('.new-todo').type('Comprar el pan {enter}')

        //cy.get('.view > .destroy > [data-testid]').click()
        
        cy.get('.todo-list li').find('button').click({force:true})
        
        cy.contains('Comprar el pan').should('not.exist')
    })


    it('Filtrar tareas', ()=>{

        cy.get('.new-todo').type('Comprar el pan {enter}').type('Comprar leche{enter}').type('Comprar agua{enter}').type('Comprar queso{enter}')

        cy.contains('Comprar el pan')
        .parent()
        .find('input[type=checkbox]')
        .check()
        cy.contains('Comprar queso')
        .parent()
        .find('input[type=checkbox]')
        .check()

        cy.get(':nth-child(2) > a').click()
        cy.get('.todo-list li').should('have.length', 2)

        cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
        cy.get('.todo-list li').should('have.length', 2)

        cy.get(':nth-child(1) > a').click()
        cy.get('.todo-list li').should('have.length', 4)


    })
    

})