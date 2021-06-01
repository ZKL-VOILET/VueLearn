const enum EvidenceTypeEnum {
	UNKNOWN = "",
	PASSPORT_VISA = "passport_visa",
	PASSPORT = "passport",
	SIGHTED_STUDENT_CARD = "sighted_tertiary_edu_id",
	SIGHTED_KEYPASS_CARD = "sighted_keypass_card",
	SIGHTED_PROOF_OF_AGE_CARD = "sighted_proof_of_age_card",
}

let someStringFromBackend;
const value = someStringFromBackend as EvidenceTypeEnum;

// Sample use in code
if (value === EvidenceTypeEnum.PASSPORT) {
	console.log("You provided a passport");
	console.log(value); // `passport`
}
