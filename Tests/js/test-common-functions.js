'use strict';


describe("pow function testing", function () {

    describe('возведение разных x в степень y', () => {
        function makeTestFunction(x, y) {
            let i = 0;
            let functionBody = `return ${x}`;
            do {
                functionBody += `*${x}`;
                i++;
            } while (i < (y - 1));

            return new Function(functionBody);
        }

        function makeTest(x, y) {

            let expectedFunction = makeTestFunction(x, y);

            it(`при возведении ${x} в степень ${y} результат: ${expectedFunction()}`, () => {
                assert.equal(pow(x, y), expectedFunction());
            });
        }

        for (let index = 1; index <= 6; index++) {
            makeTest(index, (index + 1));
        }
    });

    describe('проверка возведения в отрицательную степень и в дробную степень', () => {
        it('возведение в отрицательную степень', () => {
            assert(isNaN(pow(2, -1)), 'Возведение в отрицательную степень не прошло тест');
        });
        it('возведение в дробную степень', () => {
            assert(isNaN(pow(2, 1.5)),'Возведение в дробную степень не прошло тест');
        });
    });

    describe('возведение в нулевую степень', () => {
        it('возведение любого числа БОЛЬШЕ нуля в нулевую степень дает 1', () => {
            assert(isNaN(pow(2, 0)), 'Возведение в отрицательную степень не прошло тест');
        });
        it('возведение нуля в нулевую степень дает NaN', () => {
            assert(isNaN(pow(0, 0)),'Возведение в дробную степень не прошло тест');
        });
    });

});

describe('deepObjectCopy testing', () => {
    
    const makeRefObject = ()=>({
        simpleProperty1: 10,
        simpleProperty2: 'Ref',
        objectProperty1:{
            levelOneInnerSimpleProperty: 20
        },
        objectProperty2:{
            levelOneObjectProperty: {
                levelTwoInnerSimpleProperty: 30
            }
        }
    });

    const makeClonedObject = (objectToClone)=>{
        
        const clonedObject = deepObjectCopy(objectToClone);
        clonedObject.simpleProperty1 = 20;
        clonedObject.simpleProperty2 = 'Cloned';
        clonedObject.objectProperty1.levelOneInnerSimpleProperty = 30;
        clonedObject.objectProperty2.levelOneObjectProperty.levelTwoInnerSimpleProperty = 40;
        return clonedObject;
    };

    it('Cloned object simple props are not equal', () => {  
        const refObject = makeRefObject();
        const clonedObject = makeClonedObject(refObject);   
        //console.log(refObject,clonedObject);   
        assert.notStrictEqual(refObject.simpleProperty1, clonedObject.simpleProperty1);
    });
    it('Cloned object level one object props are not equal', () => {       
        const refObject = makeRefObject();
        const clonedObject = makeClonedObject(refObject);    
        assert.notStrictEqual(refObject.objectProperty1.levelOneInnerSimpleProperty, 
                clonedObject.objectProperty1.levelOneInnerSimpleProperty);
    });
    it('Cloned object level two object props are not equal', () => {   
        const refObject = makeRefObject();
        const clonedObject = makeClonedObject(refObject);                
        assert.notStrictEqual(refObject.objectProperty2.levelOneObjectProperty.levelTwoInnerSimpleProperty, 
                clonedObject.objectProperty2.levelOneObjectProperty.levelTwoInnerSimpleProperty);
    });

});