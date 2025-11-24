import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './components/Accordion/Accordion'
import AlertDialog from './components/AlertDialog/AlertDialog'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import ButtonGroup from './components/ButtonGroup/ButtonGroup'
import Card from './components/Card/Card'
import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger value="item-1">
            Product Information
          </AccordionTrigger>
          <AccordionContent value="item-1">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.Key features include advanced processing
            capabilities, and an intuitive user interface designed for both
            beginners and experts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger value="item-2">Shipping Details</AccordionTrigger>
          <AccordionContent value="item-2">
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days. All orders are carefully
            packaged and fully insured. Track your shipment in real-time through
            our dedicated tracking portal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger value="item-3">Return Policy</AccordionTrigger>
          <AccordionContent value="item-3">
            We stand behind our products with a comprehensive 30-day return
            policy. If you're not completely satisfied, simply return the item
            in its original condition. Our hassle-free return process includes
            free return shipping and full refunds processed within 48 hours of
            receiving the returned item.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <AlertDialog />
      <Breadcrumb />
      <ButtonGroup />
      <Card />
      <Carousel />
    </>
  )
}
