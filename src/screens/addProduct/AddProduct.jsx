/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qIVTFQfmycL
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export default function ProductAdditionScreen() {
  return (
    <main key="1" className="p-4 md:p-8 bg-blue-50">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="pb-4">
          <CardTitle>Post a New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label className="text-base" htmlFor="images">
                Product Images (1-3)
              </Label>
              <div className="flex space-x-2 mt-2">
                <img
                  alt="Image Preview 1"
                  className="w-24 h-24 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <img
                  alt="Image Preview 2"
                  className="w-24 h-24 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <img
                  alt="Image Preview 3"
                  className="w-24 h-24 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <Input className="mt-1" id="images" multiple type="file" />
            </div>
            <div>
              <Label className="text-base" htmlFor="name">
                Product Name
              </Label>
              <Input className="mt-1 w-full" id="name" type="text" />
            </div>
            <div>
              <Label className="text-base" htmlFor="description">
                Description
              </Label>
              <textarea className="mt-1 w-full h-24" id="description" />
            </div>
            <div>
              <Label className="text-base" htmlFor="tags">
                Tags
              </Label>
              <Input
                className="mt-1 w-full"
                id="tags"
                placeholder="Separate tags with commas, like: tag1, tag2, tag3"
                type="text"
              />
            </div>
            <div>
              <Label className="text-base" htmlFor="price">
                Price
              </Label>
              <Input className="mt-1 w-full" id="price" type="number" />
            </div>
            <div>
              <Label className="text-base" htmlFor="variants">
                Variants
              </Label>
              <RadioGroup className="mt-1 flex space-x-4" id="variants">
                <Label className="flex items-center" htmlFor="small">
                  <RadioGroupItem id="small" value="small" />
                  Small
                </Label>
                <Label className="flex items-center" htmlFor="medium">
                  <RadioGroupItem id="medium" value="medium" />
                  Medium
                </Label>
                <Label className="flex items-center" htmlFor="large">
                  <RadioGroupItem id="large" value="large" />
                  Large
                </Label>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-base" htmlFor="weight">
                  Weight
                </Label>
                <Input className="mt-1 w-full" id="weight" type="number" />
              </div>
              <div>
                <Label className="text-base" htmlFor="stock">
                  Quantity in Stock
                </Label>
                <Input className="mt-1 w-full" id="stock" type="number" />
              </div>
            </div>
            <Button className="w-full" size="lg">
              Post Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

