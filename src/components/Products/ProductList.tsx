import { Typography, Grid } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                List of Products
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        title="Iphone 14 Pro"
                        description="This is Iphone 14"
                        type="Smartphone"
                        capacity="230 mb"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        title="Iphone 13 Pro"
                        description="This is Iphone 13"
                        type="Iphone"
                        capacity="120 mb"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        title="Iphone 12 Pro"
                        description="This is Iphone 12"
                        type="Phone"
                        capacity="90 mb"
                        price={990}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
