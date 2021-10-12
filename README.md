<p align="center">
  <img height=100 src="https://arweave.net/sBogY_roIMJWInS0HIEi86eFGzHUnNxUzyKEdOKPWh0" />
</p>

```diff
- WIP: DON'T USE THIS UNTIL A TAGGED RELEASE
```

# Metadata: Monorepo for Glass Metadata
> “If you think of standardization as the best that you know today, but which is to be improved tomorrow; you get somewhere.” - Henry Ford


## Arweave Tags

`Content-Type` : `application/json`


`Protocol-Name` : `GLASS`


`Metadata-Type` : `VIDEO`

`Metadata-Version` : `<CAL_VER>`

`Identity` : `<DID>`

`Content-Digest` :  `<HASH_OF_METADATA>` sha-256 base64URL


`Original-Content-Digest` : `<HASH_OF_FIRST_METADATA>` sha-256 base64URL


`Method` : `CREATE` or `UPDATE` or `DELETE`

`Context` : `GOOGLE UUID` (used to link all related data)


optional

`Video-Type` : `LIVESTREAM` or `STATIC_VIDEO`



```

		// required for loading data correctly
		{
			Name:  "Content-Type",
			Value: "application/json",
		},

		// what protocol
		{
			Name:  "Protocol-Name",
			Value: "GLASS",
		},

		// what type of metadata

		{
			Name:  "Metadata-Type",
			Value: "VIDEO",
		},

		// what metadata version is being used

		{
			Name:  "Metadata-Version",
			Value: "2021-10-08",
		},

		// who is posting this

		{
			Name:  "Identity",
			Value: "did:ar://",
		},

		// what is providing the identity (sol, eth, did:ar)

		{
			Name:  "Identity-Provider",
			Value: "DID:AR",
		},

		{
			Name:  "Content-Digest",
			Value: "HASH",
		},

		{
			Name:  "Original-Content-Digest",
			Value: "HASH",
		},

		{
			Name:  "Method",
			Value: "CREATE", // or UPDATE or DELETE
		},

```
