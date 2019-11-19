// const server = require('../server');
const {find, add, update, remove } =require('./school-model')
const db = require('../data/dbConfig');


describe('school model',() => {


    describe('find', ()=> {
        beforeEach(async () =>{
            await db('schools').truncate();
        })

        it('should find a list of schools', async() => {
            let list = await db('schools')
            expect(list).toHaveLength(0)

            await add({school: 'test', address: '123 test dr', funds_needed:10000, goal:20000})
             list = await db('schools')
            expect(list).toHaveLength(1)
            expect(list[0]).toMatchObject({
                "address": "123 test dr", "email": null, "funds_given": null, "funds_needed": 10000, "goal": 20000, "id": 1, "school": "test", "school_insignia": null
            })
            expect(list[0].address).toBe('123 test dr')
        })
    })

})



    describe('add', ()=> {
        beforeEach(async () =>{
            await db('schools').truncate();
        })

        it('should find a list of schools', async() => {
            let list = await db('schools')

            await add({school: 'test', address: '123 test dr', funds_needed:10000, goal:20000})
             list = await db('schools')
             expect(list[0].school).toBe('test')
             expect(list[0].id).toBe(1)
             expect(list).toEqual(expect.arrayContaining([{"address": "123 test dr", "email": null, "funds_given": null, "funds_needed": 10000, "goal": 20000, "id": 1, "school": "test", "school_insignia": null}]))
        })
    })


    describe('update', ()=> {
        
        beforeEach(async () =>{
            await db('schools').truncate();
        })

        it('should find a list of schools', async() => {
            let list = await db('schools')

            await add({school: 'test', address: '123 test dr', funds_needed:10000, goal:20000})
             list = await db('schools')
            await update({ school: 'tests', address: '555 new rd.', funds_needed:100, goal:200},1)
             list = await db('schools')
             expect(list[0].school).toBe('tests')
             expect(list[0].id).toBe(1)
             expect(list).toEqual(expect.arrayContaining([{"address": "555 new rd.", "email": null, "funds_given": null, "funds_needed": 100, "goal": 200, "id": 1, "school": "tests", "school_insignia": null}]))
        })
    })


    describe('delete', ()=> {
        
        beforeEach(async () =>{
            await db('schools').truncate();
        })

        it('should delete item from school', async() => {
            let list = await db('schools')

            await add({school: 'test', address: '123 test dr', funds_needed:10000, goal:20000})
           
             list = await db('schools')
            await remove(1)
             list = await db('schools')
             expect(list).toHaveLength(0)

             await add({school: 'test', address: '123 test dr', funds_needed:10000, goal:20000})
             list = await db('schools')
             await add({school: 'test', address: '123 test dr', funds_needed:10000, goal:20000})
             list = await db('schools')
             await remove(2)
             list = await db('schools')
             expect(list).toHaveLength(1)
        })
    })






