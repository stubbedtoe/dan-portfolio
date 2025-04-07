export async function GET() {
    const { allCategories } = await import('../utils/portfolio.mts');

    return new Response(
        JSON.stringify({
            categories: allCategories.map((c) => ({
                id: c,
                name: c,
            })),
        })
    );
}
