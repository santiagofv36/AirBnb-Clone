import Container from "@/components/container";
import EmptyState from "@/components/empty-state";
import ListingCard from "@/components/listings/listing-card";
import getCurrentUser from "@/lib/actions/get-current-user";
import getListings from "@/lib/actions/get-listings";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing: any) => {
          return (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
              
            />
          );
        })}
      </div>
    </Container>
  );
}