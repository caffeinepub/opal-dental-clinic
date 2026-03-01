import Text "mo:core/Text";

actor {
  public type ClinicInfo = {
    name : Text;
    address : Text;
    phone : Text;
  };

  public query ({ caller }) func getClinicInfo() : async ClinicInfo {
    {
      name = "Opal Dental Clinic";
      address = "123 Smile St, Tooth City, 45678";
      phone = "+1 234-567-8900";
    };
  };
};
