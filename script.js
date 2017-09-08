//create an instance of TranslatorOptions
var defaultMagnitudeOptions = new vaow.types.MagnitudeOptions(), 
    translatorTypes = ['Number', 'Time', 'Distance', 'Weight'],
    defaultTranslatorType = 'Number', 
    defaultTranslatedWord = 'Wiating for value to be inputted';

defaultMagnitudeOptions.TranslateMagnitudes = defaultMagnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;

function getTranslator(type, magnitudeOptions) {
    if(type && magnitudeOptions) {
        return new vaow[type + 'Translator'](magnitudeOptions, true);
    }
}

function getPascalCase(camelCaseText) {
    return camelCaseText.charAt(0).toUpperCase() + camelCaseText.substr(1);
}

// Code goes here
new Vue({
    el: '#app',
    data: {
        value: 0,
        types: translatorTypes,
        magnitudeOptions: defaultMagnitudeOptions,
        translatedWord: defaultTranslatedWord,
        selectedType: defaultTranslatorType,
        translator: getTranslator(defaultTranslatorType, defaultMagnitudeOptions),
        dateFrom: null,
        dateTo: null,
        timeFrom: null,
        timeTo: null,
        selectedInputUnit: null
    },
    computed: {
        magnitudeList: function() {
            return this.getArrayForLinkedList(this.translator.translationChain.magnitudeChain);
        },
        orderOfMagnitudeList: function() {
            return this.getArrayForLinkedList(this.translator.translationChain.orderOfMagnitudeChain);
        },
        unitList: function() {
            return this.getArrayForLinkedList(this.translator.translationChain.unitChain);
        },
        availableUnitsForTranslator: function() {
            if(vaow.constants.units[this.selectedType] && vaow.constants.units[this.selectedType].All) {
                setTimeout(function() { $('.inputUnitDropdown').dropdown(); }, 100);
                return vaow.constants.units[this.selectedType].All;
            } else {
                return [];
            }
        }
    },
    methods: {
        onMagnitudeOptionsChanged: function() {
            this.translator = getTranslator(this.selectedType, this.magnitudeOptions);
            this.translate();
        },
        onTranslatorTypeChanged: function() {
            this.value = 0;
            this.translatedWord = defaultTranslatedWord;
            this.selectedInputUnit = null;
            this.translator = getTranslator(this.selectedType, this.magnitudeOptions);
        },
        translate: function() {
            if (this.value) {
                let valueToTranslate = Math.abs(this.value);
                if(this.selectedInputUnit > 0) {
                    valueToTranslate *= this.selectedInputUnit;
                }
                this.translatedWord = this.translator.translate(valueToTranslate);
            } else {
                this.translatedWord = defaultTranslatedWord;
            }
        },
        translateDateDiff: function() {
            if(this.dateFrom && this.dateTo) {
                //getTime gives us diff in milliseconds but translate expects seconds
                var from = this.dateFrom + (this.timeFrom ? 'T' + this.timeFrom : ''),
                    to = this.dateTo + (this.timeTo ? 'T' + this.timeTo : '');
                this.value = (new Date(to).getTime() - new Date(from).getTime()) / 1000;
                this.translate();
            }
        },
        getArrayForLinkedList: function(linkedList) {
            var result = [];
            var item = linkedList.head;
            while (item !== null) {
                result.push(item);
                item = item.nextElement;
            }
            return result;
        },
        removeChainItem: function(name, index) {
            let list = this[name + 'List'];
            if(list) {
                list.splice(index, 1);
                var chain = this.translator.translationChain[name + 'Chain']
                chain.empty();
                list.forEach(function(item) {
                    console.log(name, 'add' + getPascalCase(name));
                    this.translator.translationChain['add' + getPascalCase(name)](item.translationBase);
                }, this);
            }
            this.translate();
        },
        resetTranslator: function() {
            this.translator = getTranslator(this.selectedType, this.magnitudeOptions);
            this.translate();
        }
    }

});
