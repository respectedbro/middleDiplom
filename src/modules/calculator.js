export const calculator = (price = 100) => {
    const calc = document.querySelector('.calc')
    const calcType = document.getElementById('calc-type')
    const calcMaterial = document.getElementById('calc-type-material')
    const calcSquare = document.getElementById('calc-input')
    const total = document.getElementById('calc-total')

    if (!calc || !calcType || !calcMaterial || !calcSquare || !total) {
        return
    }

    const countCalc = () => {

            const calcTypeValue = +calcType.options[calcType.selectedIndex].value
            const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value
            let square = calcSquare.value
            square = square.replace(/[^\d]/g, '')

        let totalValue = 0

            if (calcTypeValue && calcMaterialValue && square) {
                totalValue = price * square * calcTypeValue * calcMaterialValue
            } else {
                totalValue = 0
            }

        total.value = totalValue
    }
    calc.addEventListener('input', (e) => {
        if (e.target === calcType ||
            e.target === calcMaterial ||
            e.target === calcSquare) {
            countCalc();
        }
    })
}
