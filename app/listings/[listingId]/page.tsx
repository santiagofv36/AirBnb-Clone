import EmptyState from "@/components/empty-state";
import getCurrentUser from "@/lib/actions/get-current-user";
import getListingById from "@/lib/actions/get-listing-by-id";
import ListingClient from "./listing-client";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
