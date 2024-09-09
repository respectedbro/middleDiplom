import {modalHeader} from "./modules/modalHeader";
import {sliderCarousel} from "./modules/sliderCarousel";
import {sliderOurServices} from "./modules/sliderOurServices";
import {modalServices} from "./modules/modalServices";
import {timer} from "./modules/timer";
import {applicationForm} from "./modules/applicationForm";
import {certificate} from "./modules/certificate";
import {scrollTop} from "./modules/scrollTop";
import {calculator} from "./modules/calculator";
import {comments} from "./modules/comments";

modalHeader()
sliderCarousel()
sliderOurServices()
modalServices()
timer('10 september 2024')
applicationForm({
    elem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ]
})
certificate()
scrollTop()
calculator(100)
comments()