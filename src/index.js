import {modalHeader} from "./modules/modalHeader";
import {sliderCarousel} from "./modules/sliderCarousel";
import {sliderOurServices} from "./modules/sliderOurServices";
import {modalServices} from "./modules/modalServices";
import {timer} from "./modules/timer";
import {applicationForm} from "./modules/applicationForm";
import {certificate} from "./modules/certificate";
import {scrollTop} from "./modules/scrollTop";
import {calculator} from "./modules/calculator";
import {render} from "./modules/render";
import {Comments} from "./modules/comments";

window.comments = new Comments

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
render(comments.users)